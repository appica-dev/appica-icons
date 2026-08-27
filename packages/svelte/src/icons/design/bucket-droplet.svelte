<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.818 3.492c1.15 1.15.218 3.945-2.08 6.245-2.3 2.299-5.096 3.231-6.246 2.081m8.326-8.326c-1.15-1.15-3.945-.217-6.244 2.082s-3.23 5.095-2.082 6.244m8.326-8.326c.362.361.676.767.934 1.208q3.49 5.817 4.047 6.895c.558 1.078-.075 2.255-1.512 3.692s-2.614 2.069-3.692 1.512L8.7 12.752a6 6 0 0 1-1.208-.934M5 16l1.465 1.638a2 2 0 1 1-3.015.099z\"/>";
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
