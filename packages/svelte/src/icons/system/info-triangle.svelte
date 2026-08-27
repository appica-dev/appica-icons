<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.363 3.591 2.256 17.125a1.914 1.914 0 0 0 1.637 2.87h16.214a1.913 1.913 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0M11.999 9h.01M11 12h1v4h1\"/>";
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
