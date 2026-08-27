<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 4h1v10a2 2 0 0 0 2 2h10M8 4h13m-1.58 11.408c.359-.362.58-.859.58-1.408V4m-8 12v4m-3 0h6m-7-8 2-2m4 0 2-2M3 3l18 18\"/>";
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
