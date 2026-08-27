<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.993 18.999v-10M8.992 3l3.001 2 3.002-2m-3.002 15.175a3 3 0 0 1-2.895 2.822 3.002 3.002 0 0 1-2.903-4.074 3 3 0 0 1 .843-1.197l-.025.023a4.504 4.504 0 0 1-2.95-5 4.501 4.501 0 0 1 7.935-2.078 4.5 4.5 0 0 1 7.181.24 4.498 4.498 0 0 1-2.195 6.838 2.998 2.998 0 0 1-2.208 5.243 3 3 0 0 1-2.778-2.993z\"/>";
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
