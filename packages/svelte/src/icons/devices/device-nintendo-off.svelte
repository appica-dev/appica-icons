<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.713 4.718A4 4 0 0 0 3 8v8a4 4 0 0 0 4 4h3V10m0-4V4H8m6 6V4h3a4 4 0 0 1 4 4v8q-.001.463-.1.896m-1.62 2.39A4 4 0 0 1 17 20h-3v-6M3 3l18 18M5.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
