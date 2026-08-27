<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.833 15.167H5.667A3.167 3.167 0 0 1 2.5 12m0 0V5.667A3.167 3.167 0 0 1 5.667 2.5H12a3.167 3.167 0 0 1 3.167 3.167v3.166M2.5 12l2.424-2.424a2.544 2.544 0 0 1 3.597 0l.312.313m-2.11-4.222v.01M8.832 12A3.167 3.167 0 0 1 12 8.833h6.333A3.167 3.167 0 0 1 21.5 12v6.333a3.167 3.167 0 0 1-3.167 3.167H12a3.166 3.166 0 0 1-3.167-3.167zm5.278 1.583v3.167l2.639-1.583z\"/>";
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
