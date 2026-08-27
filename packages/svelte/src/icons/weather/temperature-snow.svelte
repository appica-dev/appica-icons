<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 9.012h4m6.75-5.01 1 2.004H18m-1-2.004-3 5.01 2 3.006m0 0h6m-6 0-2 3.006m6.25-5.01L19 12.018l1.25 2.004M14 15.024l3 5.01m-3-5.01h-1m5 3.006h-2.25l-1 2.004M12 9.012l2.088.008M4 13.521a4.005 4.005 0 0 0-1.864 4.508c.228.853.73 1.606 1.429 2.143a3.995 3.995 0 0 0 6.299-2.143A4.016 4.016 0 0 0 8 13.521V5.004A2.006 2.006 0 0 0 6 3a2 2 0 0 0-2 2.004z\"/>";
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
