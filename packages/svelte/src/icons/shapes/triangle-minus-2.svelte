<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m20.48 15.114-6.843-11.21a1.9 1.9 0 0 0-.698-.662 1.94 1.94 0 0 0-1.879 0 1.9 1.9 0 0 0-.697.663L2.256 17.183a1.85 1.85 0 0 0-.005 1.869c.166.285.404.522.692.689s.615.255.95.259H12m4-.977h6\"/>";
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
