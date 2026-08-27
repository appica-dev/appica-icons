<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14.5 5.5 4 4M12 8 7 3 3 7l5 5M7 8 5.5 9.5M16 12l5 5-4 4-5-5m4 1-1.5 1.5M3 21h4L20 8a2.829 2.829 0 0 0-4-4L3 17z\"/>";
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
