<template>
  <UPopover :popper="{ arrow: true }" class="flex justify-center">
    <Icon name="fluent:color-24-filled" class="text-xl text-primary" />

    <template #panel>
      <div class="p-4 grid grid-cols-5 gap-3">
        <ColorThemeItem color="red" />
        <ColorThemeItem color="orange" />
        <ColorThemeItem color="amber" />
        <ColorThemeItem color="yellow" />
        <ColorThemeItem color="lime" />
        <ColorThemeItem color="green" />
        <ColorThemeItem color="emerald" />
        <ColorThemeItem color="teal" />
        <ColorThemeItem color="cyan" />
        <ColorThemeItem color="sky" />
        <ColorThemeItem color="blue" />
        <ColorThemeItem color="indigo" />
        <ColorThemeItem color="violet" />
        <ColorThemeItem color="purple" />
        <ColorThemeItem color="fuchsia" />
        <ColorThemeItem color="pink" />
        <ColorThemeItem color="rose" />
      </div>
    </template>
  </UPopover>
</template>
