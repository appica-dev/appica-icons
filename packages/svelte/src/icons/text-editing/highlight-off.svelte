<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9 9-6 6v4h4l6-6m2-2 2.503-2.503a2.829 2.829 0 0 0-4-4l-2.497 2.497M12.5 5.5l4 4m-12 4 4 4M19 15h2v2m-2 2h-6l3-3M3 3l18 18\"/>";
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
