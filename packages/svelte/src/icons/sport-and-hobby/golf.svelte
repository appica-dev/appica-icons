<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 18V3l7 4-7 4m-3 6.67c-.62.36-1 .82-1 1.33 0 1.1 1.8 2 4 2s4-.9 4-2c0-.5-.38-.97-1-1.33\"/>";
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
