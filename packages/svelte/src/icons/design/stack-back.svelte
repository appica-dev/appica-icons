<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m4 8 8 4 8-4-8-4z\"/><path fill=\"currentColor\" d=\"m12 16-4-2-4 2 8 4 8-4-4-2z\"/><path d=\"m8 10-4 2 4 2m8 0 4-2-4-2\"/>";
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
