<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m4 20 3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M9.785 6 18 14.215l-2.054 2.054a5.81 5.81 0 1 1-8.215-8.215z\"/>";
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
