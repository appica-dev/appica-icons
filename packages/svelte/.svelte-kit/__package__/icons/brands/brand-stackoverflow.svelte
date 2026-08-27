<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 16.05v.983c0 .522.21 1.022.586 1.39.375.37.884.577 1.414.577h12c.53 0 1.04-.207 1.414-.576a1.95 1.95 0 0 0 .586-1.39v-.984m-12-.984h8m-7.678-3.361 7.956.822m-7.491-4.18 7.826 1.637M10.096 5l7.608 2.431\"/>";
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
