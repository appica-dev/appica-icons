<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17.131 13.178-1.914-6.64-8.796 9.466 6.152 1.576L11 11m0 0 6.13 2.179M11 11 9.527 4.893 4.69 9.436zM8 22 3 3l19 5.5z\"/>";
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
