<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13 8-9.383 9.418a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0L16 11M9 3h4.586a1 1 0 0 1 .707.293l6.414 6.414a1 1 0 0 1 .293.707V15a2 2 0 0 1-4 0v-3l-5-5H9a2 2 0 1 1 0-4\"/>";
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
