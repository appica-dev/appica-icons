<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 6.688V5.625A2.125 2.125 0 0 1 5.625 3.5H7.75M3.5 17.313v1.062A2.125 2.125 0 0 0 5.625 20.5H7.75m8.5-17h2.125A2.125 2.125 0 0 1 20.5 5.625v1.063M16.25 20.5h2.125a2.125 2.125 0 0 0 2.125-2.125v-1.062m-8.5 0 3.188-8.5L6.688 12l3.718 1.594z\"/>";
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
