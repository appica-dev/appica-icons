<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21.385 17.373a1 1 0 0 0-.013-1.091l-8.54-13.836a.998.998 0 0 0-1.664 0l-1.8 2.917m-1.531 2.48-5.21 8.439a1.005 1.005 0 0 0 .387 1.452l8.092 4.054c.277.14.584.212.894.212m0 0c.31 0 .617-.073.895-.212l5.903-2.958M12 22V12m0-10v6M3 3l18 18\"/>";
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
