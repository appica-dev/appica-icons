<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 10.105A1.106 1.106 0 0 1 11.105 9h1.79A1.105 1.105 0 0 1 14 10.105v9.79A1.105 1.105 0 0 1 12.895 21h-1.79A1.105 1.105 0 0 1 10 19.895zm7-6A1.105 1.105 0 0 1 18.105 3h1.79A1.105 1.105 0 0 1 21 4.105v15.79A1.105 1.105 0 0 1 19.895 21h-1.79A1.105 1.105 0 0 1 17 19.895zM3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
