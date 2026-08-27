<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.326 19h15.348a1 1 0 0 0 .962-1.275l-3.43-12a1 1 0 0 0-.96-.725H7.754a1 1 0 0 0-.961.725l-3.43 12A1 1 0 0 0 4.327 19\"/>";
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
