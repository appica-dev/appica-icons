<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14 14 1.5 1.5M14 14v-2.172a2 2 0 0 0-.586-1.414L6 3 3 6l7.414 7.414a2 2 0 0 0 1.414.586zm4.347 1.575 2.08 2.079a1.96 1.96 0 0 1-2.773 2.772l-2.08-2.079a1.96 1.96 0 0 1 2.773-2.772\"/>";
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
