<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 2a1 1 0 0 1 .838.457l7.846 12.954a1.99 1.99 0 0 1-.267 2.483l-2.527 2.523c-.374.373-.88.583-1.408.583H7.518c-.528 0-1.034-.21-1.408-.583l-2.527-2.523a1.99 1.99 0 0 1-.267-2.483l7.846-12.954A1 1 0 0 1 12 1.999m0 0L7 20.9M12 2l5 18.9\"/>";
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
