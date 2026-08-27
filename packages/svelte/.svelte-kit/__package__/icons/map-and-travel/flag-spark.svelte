<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.903 14.913a4.85 4.85 0 0 1-2.103-1.22 4.84 4.84 0 0 0-3.4-1.397A4.84 4.84 0 0 0 5 13.693m0 0V4.897A4.84 4.84 0 0 1 8.4 3.5c1.271 0 2.492.502 3.4 1.397a4.84 4.84 0 0 0 3.4 1.397 4.84 4.84 0 0 0 3.4-1.397v6.352M5 13.694v6.841M18.6 22a4.65 4.65 0 0 1 1.222-2.191A4.6 4.6 0 0 1 22 18.579a4.6 4.6 0 0 1-2.178-1.23 4.65 4.65 0 0 1-1.222-2.19 4.65 4.65 0 0 1-1.222 2.19 4.6 4.6 0 0 1-2.178 1.23c.825.201 1.578.627 2.178 1.23A4.65 4.65 0 0 1 18.6 22\"/>";
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
