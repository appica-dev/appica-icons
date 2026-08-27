<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 22c-.35 0-.695-.092-1-.266l-7-4.008a1.98 1.98 0 0 1-1-1.717V7.991c0-.708.381-1.363 1-1.718l7-4.008a2.02 2.02 0 0 1 2 0l7 4.008a1.98 1.98 0 0 1 1 1.717v8.018c0 .708-.381 1.363-1 1.718l-7 4.008c-.305.174-.65.265-1 .265m0 0V12m0 0 8.73-5.04M12 12 3.27 6.96\"/>";
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
