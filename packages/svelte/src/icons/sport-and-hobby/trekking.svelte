<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7 21 2-4m4 4v-4l-3-3m0 0 1-6m-1 6-1.827-1.218a2 2 0 0 1-.831-2.15l.28-1.117A2 2 0 0 1 9.561 8H11m0 0 3 4 3 2m-6-6 4 1 3-2m-1 5v9m-1-1h2M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
