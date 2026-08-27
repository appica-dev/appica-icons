<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.616 13.921a5.003 5.003 0 0 0-4.615-6.926 5 5 0 0 0-4.977 4.52c-.079.82.045 1.646.362 2.406m12.921 1.546a9.007 9.007 0 0 0-4.06-11.402 8.997 8.997 0 0 0-13.206 7.07 9 9 0 0 0 .651 4.332M9 21l3-9.003L15 21m-5-2h4m-3-7.004a1 1 0 1 0 2.002 0 1 1 0 0 0-2.002 0\"/>";
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
