<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill=\"currentColor\" d=\"M11.482 7.502a1 1 0 0 0 .998 1 .997.997 0 0 0 .998-1 1 1 0 0 0-.998-1 .997.997 0 0 0-.998 1\"/><path d=\"M6.626 5.637a8.98 8.98 0 0 1 6.854-2.623A8.97 8.97 0 0 1 20 6.384l-5.61 5.619L20 17.62a8.99 8.99 0 0 1-6.269 3.348 8.97 8.97 0 0 1-6.736-2.261 9 9 0 0 1-2.991-6.456 9.02 9.02 0 0 1 2.622-6.615\"/><path d=\"M11.482 7.502a1 1 0 0 0 .998 1 .997.997 0 0 0 .998-1 1 1 0 0 0-.998-1 .997.997 0 0 0-.998 1\"/>";
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
