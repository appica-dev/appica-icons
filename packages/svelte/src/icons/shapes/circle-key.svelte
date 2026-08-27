<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12.5 11.5-4 4L10 17m2-2-1.5-1.5M12 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m9 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0\"/>";
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
