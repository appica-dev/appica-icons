<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m16 10 4-2-8-4-8 4 4 2\"/><path fill=\"currentColor\" d=\"m12 12-4-2-4 2 8 4 8-4-4-2z\"/><path d=\"m8 14-4 2 8 4 8-4-4-2\"/>";
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
