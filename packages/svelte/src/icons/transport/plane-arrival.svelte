<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2.75 21h18m-5.843-9.054 4.83 1.276a2 2 0 0 1 1.237.913 1.95 1.95 0 0 1-.739 2.712 2.02 2.02 0 0 1-1.534.18L4.212 13.204 2.867 6.728l2.898.765 1.414 2.414 2.898.764-.12-7.171 2.898.766z\"/>";
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
