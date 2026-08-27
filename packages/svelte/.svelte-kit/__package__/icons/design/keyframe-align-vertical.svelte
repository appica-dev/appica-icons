<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 2v2m0 16v2m.816-5.42c-.208.267-.505.42-.817.42s-.61-.153-.816-.42l-2.907-3.748a1.39 1.39 0 0 1 0-1.664l2.908-3.748c.207-.267.504-.42.816-.42s.61.153.816.42l2.907 3.748a1.39 1.39 0 0 1 0 1.664z\"/>";
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
