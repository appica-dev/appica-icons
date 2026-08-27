<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.778 3.25a.972.972 0 0 1 0 1.944H4.222a.972.972 0 1 1 0-1.944zM19.778 18.806a.972.972 0 1 1 0 1.944H4.222a.972.972 0 1 1 0-1.944zM15.889 8.111a2.917 2.917 0 0 1 2.917 2.917v1.944a2.917 2.917 0 0 1-2.917 2.917H8.11a2.917 2.917 0 0 1-2.917-2.917v-1.944A2.917 2.917 0 0 1 8.111 8.11z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
