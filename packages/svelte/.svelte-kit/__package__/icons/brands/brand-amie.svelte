<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 8.5c0 1.33.472 2.55 1.257 3.5A5.5 5.5 0 0 0 12 19.743 5.5 5.5 0 0 0 19.743 12 5.5 5.5 0 0 0 12 4.257 5.5 5.5 0 0 0 3 8.5m7 1c0-.828.895-1.5 2-1.5s2 .672 2 1.5v5c0 .828-.895 1.5-2 1.5s-2-.672-2-1.5z\"/>";
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
