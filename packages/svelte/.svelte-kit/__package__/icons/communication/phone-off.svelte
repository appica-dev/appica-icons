<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 21 21 3M5.831 14.161A15.95 15.95 0 0 1 3 6a2 2 0 0 1 2-2h4l2 5-2.5 1.5q.162.33.345.645m1.751 2.277A11 11 0 0 0 13.5 15.5L15 13l5 2v4a2 2 0 0 1-2 2 15.96 15.96 0 0 1-10.344-4.657\"/>";
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
