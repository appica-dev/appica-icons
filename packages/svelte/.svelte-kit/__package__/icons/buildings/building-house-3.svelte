<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 20h-5m5 0v-4c0-.943 0-1.414-.293-1.707S15.943 14 15 14h-1c-.943 0-1.414 0-1.707.293S12 15.057 12 16v4m5 0h5m-10 0H2m1.5-6c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2zm0 0v6M7 9l4.771-4.265C13.065 3.578 13.712 3 14.5 3s1.435.578 2.729 1.735L22 9M8.5 8v12m12 0V8m-7 0h2m0 3h-2\"/>";
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
