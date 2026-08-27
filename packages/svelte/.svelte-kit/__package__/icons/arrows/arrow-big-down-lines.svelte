<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.966 3.5H9.034m5.932 2.985H9.034m5.932 5.971h3.546a.98.98 0 0 1 .913.614 1 1 0 0 1-.215 1.085L12.7 20.709a.985.985 0 0 1-1.398 0l-6.512-6.554a.997.997 0 0 1 .7-1.699h3.545V9.471h5.932z\"/>";
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
