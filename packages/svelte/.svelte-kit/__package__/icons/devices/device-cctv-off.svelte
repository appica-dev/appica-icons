<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 7H4a1 1 0 0 1-1-1V4c0-.275.11-.523.29-.704M7 3h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-9m-.64 3.35a4 4 0 1 0 5.285 5.3M19 7v7q0 .482-.064.947m-1.095 2.913A7 7 0 0 1 5 14V7m7 7h.01M3 3l18 18\"/>";
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
