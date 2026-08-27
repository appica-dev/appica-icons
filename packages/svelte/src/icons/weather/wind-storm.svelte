<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m20 7-3 5h4l-3 5M3 16h4a2 2 0 1 1 0 4m-4-8h8a2 2 0 0 0 0-4M3 8h3a2 2 0 1 0 0-4\"/>";
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
