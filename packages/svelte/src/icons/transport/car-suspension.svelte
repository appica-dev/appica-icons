<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 0V4m-3 7 6-1m-6 4 6-1M9 8l6-1m-2-5h-2v2h2z\"/>";
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
