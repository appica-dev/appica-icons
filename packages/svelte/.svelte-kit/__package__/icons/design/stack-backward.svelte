<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill=\"currentColor\" d=\"m10 12-6 3 8 4 8-4-6-3-2 1z\"/><path d=\"m14 12 6-3-8-4-8 4 6 3m4 0 6 3-8 4-8-4 6-3m4 0-2 1-2-1\"/>";
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
