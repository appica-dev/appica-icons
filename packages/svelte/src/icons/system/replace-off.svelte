<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 3h1a1 1 0 0 1 1 1v1m-.303 3.717A1 1 0 0 1 8 9H4a1 1 0 0 1-1-1V4c0-.28.115-.532.3-.714M19 15h1a1 1 0 0 1 1 1v1m-.303 3.717A1 1 0 0 1 20 21h-4a1 1 0 0 1-1-1v-4c0-.28.115-.532.3-.714M21 11V8a2 2 0 0 0-2-2h-6m0 0 3 3m-3-3 3-3M3 13v3a2 2 0 0 0 2 2h6m0 0-3-3m3 3-3 3M3 3l18 18\"/>";
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
