<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.667 9.25 5.333 6 2 9.25l3.333 3.25zm0 0L12 6l3.333 3.25m-6.666 0L12 12.5m3.333-3.25L18.667 6 22 9.25l-3.333 3.25zm0 0L12 12.5m0 0 3.333 3.25L12 19l-3.333-3.25z\"/>";
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
