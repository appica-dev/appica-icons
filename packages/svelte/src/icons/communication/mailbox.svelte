<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 21v-6.5A3.5 3.5 0 0 0 6.5 11m0 0A3.5 3.5 0 0 0 3 14.5V21h18v-6a4 4 0 0 0-4-4zm5.5 0V3h4l2 2-2 2h-4m-6 8h1\"/>";
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
