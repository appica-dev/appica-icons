<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6h16M6 12h10m-7 6h4m8-3h-2m0 0h-.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H19m0-6v-1m-2 7h2m0 0v1\"/>";
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
