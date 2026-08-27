<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.346 5.353Q9.661 5.16 10 5a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3m-1 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 1.273-3.707M9 17v1a3 3 0 0 0 6 0v-1M3 3l18 18\"/>";
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
