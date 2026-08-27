<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9.368 12.583-2.105-2.166m2.573 2.166h11.696c.259 0 .468.27.468.602C22 15.845 20.324 18 18.257 18h-5.146c-2.067 0-3.743-2.156-3.743-4.815 0-.332.21-.602.468-.602m-7.449-5.26 2.619 2.695a1.296 1.296 0 0 0 1.87 0 1.39 1.39 0 0 0 0-1.925L4.258 5.4a1.296 1.296 0 0 0-1.87 0 1.39 1.39 0 0 0 0 1.924\"/>";
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
