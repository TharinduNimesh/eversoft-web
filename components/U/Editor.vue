<script setup>
useHead({
  script: [
    {
      src: "/js/prism.js",
    },
  ],
});
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Code from "@tiptap/extension-code";
import Image from "@tiptap/extension-image";
import Highlight from '@tiptap/extension-highlight'

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const editor = useEditor({
  editorProps: {
    attributes: {
      class:
        "h-[400px] border border-slate-300 dark:border-gray-700 bg-gray-50 dark:bg-[#2b2a33] p-5 border-t-none rounded-bl-lg rounded-br-lg outline-none overflow-y-auto",
    },
  },
  content: props.modelValue,
  extensions: [
    StarterKit,
    Underline,
    Highlight,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Heading.configure({
      levels: [1, 2, 3, 4, 5, 6],
    }),
    Code.configure({
      HTMLAttributes: {
        class: "language-javascript",
      },
    }),
    Image.configure({
      inline: true,
      HTMLAttributes: {
        class: "w-full",
      },
    }),
  ],
});

watch(
  () => editor.value?.getHTML(),
  (value) => {
    emit("update:modelValue", value);
  }
);

const headingIcon = computed(() => {
  if (editor.value?.isActive("heading", { level: 1 })) {
    return {
      icon: "lucide:heading-1",
      isHeading: true,
    };
  }
  if (editor.value?.isActive("heading", { level: 2 })) {
    return {
      icon: "lucide:heading-2",
      isHeading: true,
    };
  }
  if (editor.value?.isActive("heading", { level: 3 })) {
    return {
      icon: "lucide:heading-3",
      isHeading: true,
    };
  }
  if (editor.value?.isActive("heading", { level: 4 })) {
    return {
      icon: "lucide:heading-4",
      isHeading: true,
    };
  }
  if (editor.value?.isActive("heading", { level: 5 })) {
    return {
      icon: "lucide:heading-5",
      isHeading: true,
    };
  }
  if (editor.value?.isActive("heading", { level: 6 })) {
    return {
      icon: "lucide:heading-6",
      isHeading: true,
    };
  }
  return {
    icon: "lucide:heading",
    isHeading: false,
  };
});

function addImage() {
  const url = window.prompt("URL");

  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run();
  }
}
</script>

<template>
  <div class="w-full markdown flex flex-col">
    <div
      v-if="editor"
      class="px-5 py-3 flex gap-3 flex-wrap border border-b-0 border-slate-300 dark:border-gray-700 bg-gray-50 dark:bg-[#2b2a33] rounded-t-lg"
    >
      <UButton
        @click="editor.chain().focus().toggleBold().run()"
        color="black"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :variant="editor.isActive('bold') ? 'solid' : 'ghost'"
        icon="material-symbols:format-bold"
      />
      <UButton
        @click="editor.chain().focus().toggleItalic().run()"
        color="black"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :variant="editor.isActive('italic') ? 'solid' : 'ghost'"
        icon="material-symbols:format-italic"
      />
      <UButton
        color="black"
        @click="editor.chain().focus().setHorizontalRule().run()"
        icon="material-symbols:chrome-minimize"
      />
      <UButton
        @click="editor.chain().focus().toggleUnderline().run()"
        color="black"
        :variant="editor.isActive('underline') ? 'solid' : 'ghost'"
        icon="ic:twotone-format-underlined"
      />
      <UButton
        @click="editor.chain().focus().toggleHighlight().run()"
        color="black"
        :variant="editor.isActive('highlight') ? 'solid' : 'ghost'"
        icon="clarity:highlighter-line"
      />
      <UPopover mode="hover" :popper="{ arrow: true }">
        <UButton
          color="black"
          :icon="headingIcon.icon"
          :variant="headingIcon.isHeading ? 'solid' : 'ghost'"
        />

        <template #panel>
          <div class="grid grid-cols-3 gap-1 p-3">
            <UButton
              color="black"
              icon="lucide:heading-1"
              :variant="
                editor.isActive('heading', { level: 1 }) ? 'solid' : 'ghost'
              "
              @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            />
            <UButton
              color="black"
              icon="lucide:heading-2"
              :variant="
                editor.isActive('heading', { level: 2 }) ? 'solid' : 'ghost'
              "
              @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            />
            <UButton
              color="black"
              icon="lucide:heading-3"
              :variant="
                editor.isActive('heading', { level: 3 }) ? 'solid' : 'ghost'
              "
              @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            />
            <UButton
              color="black"
              icon="lucide:heading-4"
              :variant="
                editor.isActive('heading', { level: 4 }) ? 'solid' : 'ghost'
              "
              @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            />
            <UButton
              color="black"
              icon="lucide:heading-5"
              :variant="
                editor.isActive('heading', { level: 5 }) ? 'solid' : 'ghost'
              "
              @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            />
            <UButton
              color="black"
              icon="lucide:heading-6"
              :variant="
                editor.isActive('heading', { level: 6 }) ? 'solid' : 'ghost'
              "
              @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            />
          </div>
        </template>
      </UPopover>

      <!-- Code Method is not finished -->
      <!-- <UButton
        @click="editor.commands.toggleCode()"
        color="black"
        :variant="editor.isActive('code') ? 'solid' : 'ghost'"
        icon="material-symbols:code"
      /> -->

      <UButton
        @click="editor.chain().focus().toggleBlockquote().run()"
        color="black"
        :variant="editor.isActive('blockquote') ? 'solid' : 'ghost'"
        icon="material-symbols:format-quote"
      />

      <!-- Text Alignment Start -->
      <div>
        <UButton
          v-if="editor.isActive({ textAlign: 'justify' })"
          @click="editor.chain().focus().setTextAlign('left').run()"
          color="black"
          icon="material-symbols:format-align-justify"
        />
        <UButton
          v-else-if="editor.isActive({ textAlign: 'left' })"
          @click="editor.chain().focus().setTextAlign('center').run()"
          color="black"
          icon="material-symbols:format-align-left"
        />
        <UButton
          v-else-if="editor.isActive({ textAlign: 'center' })"
          @click="editor.chain().focus().setTextAlign('right').run()"
          color="black"
          icon="material-symbols:format-align-center"
        />
        <UButton
          v-else
          @click="editor.chain().focus().setTextAlign('justify').run()"
          color="black"
          icon="material-symbols:format-align-right"
        />
      </div>
      <!-- Text Alignment End -->

      <UButton
        @click="addImage"
        color="black"
        variant="ghost"
        icon="material-symbols:imagesmode-outline-rounded"
      />

      <UButton
        class="disabled:text-gray-200 dark:disabled:text-gray-600"
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
        icon="ic:round-undo"
        color="black"
        variant="ghost"
      />
      <UButton
        class="disabled:text-gray-200 dark:disabled:text-gray-600"
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
        icon="ic:round-redo"
        color="black"
        variant="ghost"
      />
    </div>
    <EditorContent :editor="editor" />
  </div>
</template>

<style scoped></style>
