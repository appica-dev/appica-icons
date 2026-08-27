<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 3h4m0 0v4m0-4L6 18m0 0H3m3 0v3m10.5-1c1.576-1.576 2.5-4.095 2.5-6.5C19 8.69 15.31 5 10.5 5 8.085 5 5.578 5.913 4 7.5z\"/>";
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
