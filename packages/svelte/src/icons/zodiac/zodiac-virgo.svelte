<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 4a2 2 0 0 1 2 2m0 0v9m0-9a2 2 0 1 1 4 0m0 0v9m0-9a2 2 0 1 1 4 0v10c0 1.326.738 2.598 2.05 3.535C16.363 20.473 18.143 21 20 21m-8 0c1.857 0 3.637-.527 4.95-1.465C18.263 18.598 19 17.327 19 16v-2a3 3 0 0 0-6 0\"/>";
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
