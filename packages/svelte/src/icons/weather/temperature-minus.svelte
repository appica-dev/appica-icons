<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 9.012h4m4 0h6M8 13.521a4.005 4.005 0 0 0-1.864 4.508c.228.853.73 1.606 1.429 2.143a3.995 3.995 0 0 0 6.299-2.143A4.015 4.015 0 0 0 12 13.521V5.004A2.006 2.006 0 0 0 10 3a2 2 0 0 0-2 2.004z\"/>";
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
