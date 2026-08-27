<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 12V9a3 3 0 0 1 2.08-2.856M10 6h10m0 0-3-3m3 3-3 3m3 3v3a3 3 0 0 1-.133.886m-1.99 1.984c-.284.086-.58.13-.877.13H4m0 0 3 3m-3-3 3-3M3 3l18 18\"/>";
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
