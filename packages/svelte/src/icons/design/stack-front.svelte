<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill=\"currentColor\" d=\"M12 4 4 8l8 4 8-4z\"/><path d=\"m8 14-4 2 8 4 8-4-4-2\"/><path d=\"m8 10-4 2 8 4 8-4-4-2\"/>";
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
