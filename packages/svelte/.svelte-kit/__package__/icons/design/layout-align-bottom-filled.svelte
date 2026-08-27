<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.778 18.806a.972.972 0 1 1 0 1.944H4.222a.972.972 0 1 1 0-1.944zM12.972 3.25a2.917 2.917 0 0 1 2.917 2.917v7.777a2.916 2.916 0 0 1-2.917 2.917h-1.944a2.917 2.917 0 0 1-2.917-2.917V6.167a2.917 2.917 0 0 1 2.917-2.917z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
